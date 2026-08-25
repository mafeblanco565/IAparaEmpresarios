from math import cos, sin, pi
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

SIZE = 720
FRAMES = 24
DURATION = 85
OUT = Path('/home/ubuntu/IAparaEmpresarios/public/images/invitation-ia-red.gif')
FONT = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)


def lerp(a, b, t):
    return int(a + (b - a) * t)


def draw_background(frame_index):
    t = frame_index / FRAMES
    image = Image.new('RGB', (SIZE, SIZE), '#16070d')
    pixels = image.load()
    for y in range(SIZE):
        for x in range(SIZE):
            dx = x - SIZE * (0.50 + 0.05 * sin(t * 2 * pi))
            dy = y - SIZE * (0.46 + 0.04 * cos(t * 2 * pi))
            dist = (dx * dx + dy * dy) ** 0.5 / SIZE
            glow = max(0.0, 1.0 - dist * 3.4)
            edge = max(0.0, 1.0 - ((x - SIZE / 2) ** 2 + (y - SIZE / 2) ** 2) ** 0.5 / (SIZE * .78))
            pixels[x, y] = (
                lerp(18, 70, glow),
                lerp(6, 8, glow),
                lerp(12, 25, glow + edge * .15),
            )
    return image


def frame(index):
    t = index / FRAMES
    image = draw_background(index).convert('RGBA')

    # Soft atmospheric red halo behind the core.
    glow = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy = SIZE * .52, SIZE * .48
    for radius, alpha in [(150, 10), (125, 18), (100, 30), (75, 44)]:
        gd.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(230, 57, 70, alpha))
    image = Image.alpha_composite(image, glow.filter(ImageFilter.GaussianBlur(18)))

    # Perspective grid, matching the CSS visual.
    grid = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    g = ImageDraw.Draw(grid)
    horizon = int(SIZE * .54)
    for y in range(horizon, SIZE + 80, 34):
        bend = (y - horizon) * .19
        g.line((0, y, SIZE, y - bend), fill=(255, 105, 120, 26), width=1)
    for x in range(-SIZE, SIZE * 2, 38):
        g.line((SIZE / 2, horizon, x, SIZE), fill=(255, 105, 120, 26), width=1)
    image = Image.alpha_composite(image, grid.filter(ImageFilter.GaussianBlur(.2)))

    # Rotating orbital rings.
    rings = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    rd = ImageDraw.Draw(rings)
    orbit_specs = [(84, 84, t * 360, 2, 172), (146, 64, 35 + t * -300, 2, 140), (190, 96, -25 + t * 250, 1, 82)]
    for width, height, rotation, stroke, alpha in orbit_specs:
        ring = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
        r = ImageDraw.Draw(ring)
        r.ellipse((cx - width, cy - height, cx + width, cy + height), outline=(255, 112, 124, alpha), width=stroke)
        ring = ring.rotate(rotation, center=(cx, cy), resample=Image.Resampling.BICUBIC)
        rings = Image.alpha_composite(rings, ring)
    image = Image.alpha_composite(image, rings)

    # Moving data nodes.
    nodes = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    nd = ImageDraw.Draw(nodes)
    node_angles = [t * 2 * pi + 0.9, t * -2.4 * pi + 2.2, t * 1.5 * pi + 4.1]
    node_radii = [180, 215, 155]
    for angle, radius in zip(node_angles, node_radii):
        nx = cx + cos(angle) * radius
        ny = cy + sin(angle) * radius * .55
        pulse = 3 + int((sin(t * 2 * pi + angle) + 1) * 1.4)
        nd.ellipse((nx - pulse - 7, ny - pulse - 7, nx + pulse + 7, ny + pulse + 7), fill=(230, 57, 70, 28))
        nd.ellipse((nx - pulse, ny - pulse, nx + pulse, ny + pulse), fill=(230, 57, 70, 220), outline=(255, 176, 182, 220), width=1)
    image = Image.alpha_composite(image, nodes.filter(ImageFilter.GaussianBlur(.5)))

    # Core and rotating highlight.
    core = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
    cd = ImageDraw.Draw(core)
    core_r = 58
    cd.ellipse((cx - core_r, cy - core_r, cx + core_r, cy + core_r), fill=(230, 57, 70, 24), outline=(230, 57, 70, 180), width=2)
    inner = 38
    cd.ellipse((cx - inner, cy - inner, cx + inner, cy + inner), fill=(225, 46, 68, 245), outline=(255, 190, 195, 220), width=2)
    dot_angle = t * 2 * pi
    dot_x = cx + cos(dot_angle) * core_r
    dot_y = cy + sin(dot_angle) * core_r
    cd.ellipse((dot_x - 4, dot_y - 4, dot_x + 4, dot_y + 4), fill=(255, 215, 218, 230))
    bbox = cd.textbbox((0, 0), 'IA', font=FONT)
    cd.text((cx - (bbox[2] - bbox[0]) / 2, cy - (bbox[3] - bbox[1]) / 2 - 2), 'IA', font=FONT, fill=(255, 255, 255, 245))
    image = Image.alpha_composite(image, core)
    return image.convert('P', palette=Image.Palette.ADAPTIVE)


frames = [frame(i) for i in range(FRAMES)]
OUT.parent.mkdir(parents=True, exist_ok=True)
frames[0].save(OUT, save_all=True, append_images=frames[1:], duration=DURATION, loop=0, optimize=True, disposal=2)
print(OUT)

"""Extract the student from the baked light checkerboard background."""

from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


SOURCE = Path("public/images/student.png")
DESTINATION = Path("public/images/student-transparent.png")

image = Image.open(SOURCE).convert("RGBA")
width, height = image.size
pixels = list(image.get_flattened_data())
background = bytearray(width * height)
queue: deque[int] = deque()


def is_checkerboard(pixel: tuple[int, int, int, int]) -> bool:
    red, green, blue, _ = pixel
    return min(red, green, blue) >= 210 and max(red, green, blue) - min(red, green, blue) <= 18


def enqueue(index: int) -> None:
    if not background[index] and is_checkerboard(pixels[index]):
        background[index] = 1
        queue.append(index)


for x in range(width):
    enqueue(x)
    enqueue((height - 1) * width + x)
for y in range(height):
    enqueue(y * width)
    enqueue(y * width + width - 1)

while queue:
    index = queue.popleft()
    x = index % width
    if x:
        enqueue(index - 1)
    if x + 1 < width:
        enqueue(index + 1)
    if index >= width:
        enqueue(index - width)
    if index + width < width * height:
        enqueue(index + width)

alpha = Image.new("L", (width, height), 255)
alpha.putdata([0 if value else 255 for value in background])
alpha = alpha.filter(ImageFilter.GaussianBlur(0.65))
image.putalpha(alpha)
image.save(DESTINATION, optimize=True)

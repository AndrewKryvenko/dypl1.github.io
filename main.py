import asyncio
import json

from aiogram import types
from aiogram import Bot, Dispatcher
from aiogram.types import ReplyKeyboardMarkup

bot = Bot(token="YOUR_TELEGRAM_BOT_TOKEN")
dp = Dispatcher(bot)


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
    await message.answer("ТУТ ПОЧАТКОВИЙ ТЕКСТ ПРИ КОМАНДІ СТАРТ", reply_markup=keyboard, parse_mode="Markdown")


@dp.message_handler()
async def web_app(message: types.Message):
    try:
        # Пытаемся загрузить данные веб-приложения из текста сообщения
        parsed_data = json.loads(message.text)
        message_text = ""
        for i, item in enumerate(parsed_data['items'], start=1):
            position = int(item['id'].replace('item', ''))
            message_text += f"Позиція {position}\n"
            message_text += f"Вартість {item['price']}\n\n"
            message_text += f"Кількість {item['quantity']}\n\n"
        message_text += f"Загальна вартість: {parsed_data['totalPrice']}"
        await bot.send_message(message.from_user.id, message_text)
        await bot.send_message('-1002022582711', f"Нове замовлення\n{message_text}")
    except json.JSONDecodeError:
        # Если не удалось загрузить JSON из текста сообщения, обрабатываем это
        await bot.send_message(message.from_user.id, "Невірний формат даних для веб-додатка.")


async def main():
    await dp.start_polling()


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())

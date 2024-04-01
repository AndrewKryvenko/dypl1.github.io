import asyncio
import json

from aiogram import types
from aiogram import Bot, Dispatcher
from aiogram.fsm.context import FSMContext
from aiogram.filters.command import Command
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton

bot = Bot(token="6442089419:AAG4q9RlLlpJ7w4HEKusOqTXUA18MSMaK_w")
dp = Dispatcher(bot)


@dp.message_handler(commands=['start'])
async def start(message: types.Message, state: FSMContext):
    keyboard = ReplyKeyboardMarkup(resize_keyboard=True)
    await message.answer("ТУТ ПОЧАТКОВИЙ ТЕКСТ ПРИ КОМАНДІ СТАРТ", reply_markup=keyboard, parse_mode="Markdown")


@dp.message_handler()
async def web_app(message: types.Message):
    json_data = message.web_app_data
    parsed_data = json.loads(json_data)
    message_text = ""
    for i, item in enumerate(parsed_data['items'], start=1):
        position = int(item['id'].replace('item', ''))
        message_text += f"Позиція {position}\n"
        message_text += f"Вартість {item['price']}\n\n"
        message_text += f"Кількість {item['quantity']}\n\n"

    message_text += f"Загальна вартість: {parsed_data['totalPrice']}"

    await bot.send_message(message.from_user.id, message_text)
    await bot.send_message('-1002022582711', f"Нове замовлення\n{message_text}")


async def main():
    await dp.start_polling()


if __name__ == "__main__":
    asyncio.run(main())

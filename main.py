import asyncio
from aiogram import Bot, Dispatcher, types

bot = Bot(token="6442089419:AAG4q9RlLlpJ7w4HEKusOqTXUA18MSMaK_w")
dp = Dispatcher(bot)

orders = {}  # Словарь для хранения заказов

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    await message.answer("Привіт! Це бот для замовлення їжі. Виберіть потрібні товари і натисніть на кнопку 'Замовити'.")

@dp.message_handler()
async def order(message: types.Message):
    # Ваша логика обработки заказа здесь
    user_id = message.from_user.id
    if user_id in orders:
        # Если заказ уже есть, добавляем новый товар к существующему заказу
        orders[user_id].append(message.text)
    else:
        # Если заказа нет, создаем новый заказ
        orders[user_id] = [message.text]
    await message.answer("Товар додано до кошика.")

@dp.callback_query_handler(lambda callback_query: callback_query.data == 'mainButtonClicked')
async def main_button_clicked(callback_query: types.CallbackQuery):
    # Получаем данные о заказанных товарах
    items = callback_query.data['items']
    total_price = callback_query.data['totalPrice']

    # Формируем текст сообщения о заказе
    order_text = "Ваше замовлення:\n"
    for item in items:
        order_text += f"Назва: {item['id']}, Кількість: {item['quantity']}, Ціна: {item['price']} грн\n"
    order_text += f"Загальна вартість: {total_price} грн"

    # Отправляем сообщение о заказе в чат
    user_id = callback_query.from_user.id
    await bot.send_message(user_id, order_text)

async def main():
    await dp.start_polling()

if __name__ == "__main__":
    asyncio.run(main())

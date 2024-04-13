**Сначала:**

Склонировать репозиторий
```sh
git clone https://github.com/Enkratia/task-complex .
```
Установить зависимости
```sh
npm i
```
**Далее на выбор вариант запуска:**

**Простой вариант:**
1. Запустить проект
```sh
npm run dev
```
**Сложный вариант (с оптимизацией):**
1. Собрать проект
```sh
npm run build
```
2. Перенести папку "static" из папки ".next" в папку по пути ".next/standalone/.next" (на 2 уровня вниз)

3. Запустить проект
```sh
node .next/standalone/server.js
```
-----------------------------------------------------------------------------
**Пункты из задания:**
1. адаптирован под мобильные устройства и планшеты
2. ленивая подгрузка товаров через intersection observer
3. кнопки + и - в поле для ввода кол-ва товара c возможностью вписать в поле для ввода любое кол-во.
4. при изменении кол-ва какого-либо из товаров меняется информация в корзине
5. набранные товары сохраняются при перезагрузке страницы
6. маска в поле для телефона
7. при нажатии на кнопку "заказать" идет проверка того что телефон полностью введен (валидация)
8. если есть ошибки - подсвечивается соответствующее поле красным (поле номера телефона)
9. после отправки запроса и получения ответа от сервера отображается попап, что всё успешно (в случае ошибки тоже)
10. прелоадеры (скелетоны)
11. фикс xss атаки (санитизация)
12. учтена возможность того что название товара может быть длиннее, чем в дизайне 
13. скорость загрузки сайта и скорость появления там контента (рекомендуется ssr) - начальные данные запрашиваются на сервере, при последующем прокручивании запросы идут с клиентской части ("rtk query"). Также используется streaming

Также:
1. добавляется кнопка развернуть/свернуть отзыв, если отзыв очень длинный
2. добавлена обработка ошибок для запросов товаров/отзывов, - в этом случает появляется уведомление в правом нижнем углу
3. сделана страница 404
4. есть кнопка скролла наверх
5. использовались: react/next.js/typescript/redux-toolkit + rtk query/scss
6. в корзине изначально показывается до 2 товаров, остальные можно увидеть, нажав на кнопку (чтобы уменьшить "layout shift")

** так как все числа(цены) целые, библиотека по типу "decimal.js" не использовалась

** можно было бы добавить кнопки удаления конкретного товара/всех товаров внутри корзины

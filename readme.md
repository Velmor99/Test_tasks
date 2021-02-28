## task_1 

Задание было сделано с помощью обычного css, все стили находятся в файле style.css

## task_2

Во втором задании была использована кастомная сборка webpack написанная мною, она поддерживает React, SCSS, а так же стандартные вещи: CSS, PNG/JPG/JPEG/SVG и.т.д
Основной код написал в файле App.js, к нему подключены 2 компонента Modal-модальное окно для картинок и Timer-часы показывающие актуальную дату
Задача была выполнена с помощью React, основные стили лежат в файле app.css вспомогательные подключены к компонентам и находятся в тех же папках что и компоненты.
Для хранения данных использовался localStorage, а так же все пути были записаны в файл gallery.json что бы было легче рендерить список картинок. 
Была реализована небольшая adaptive верстка с mobile-first подходом. Все задачи были выполнены вместе с пунктом БОНУС.
Готовая сборка лежит в папке dist, я не стал заносить ее в gitignore так как хочу воспользоваться хостингом github 

## task_3 

В третьем задании была использована все та же сборка webpack. 
Реализовал запрос на сторонний API сервер, а так же использовал React Hooks. 
Основной код лежит в App.js.
Готовая сборка лежит в папке dist, я не стал заносить ее в gitignore так как хочу воспользоваться хостингом github 

## Конфигурации сборки и общие сведения


Команда для запуска сборки в режиме разработки, запускается локальная страница на порту 3000, для активации перейдите в папку с проектом и введите команду:

```shell
npm start
```

Для того что бы собрать проект в продакшен используйте команду:

```shell
npm run build
```

Для нормализации стилей везде используется normalize.css



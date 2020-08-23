<!doctype html>
<html lang="ja">
  <head>
      <meta charset="utf-8">
      <title>LAravelSPA</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="{{ mix('/css/app/css') }}" rel="stylesheet">
      <meta name="csrf-token" content="{{ csrf_token() }}">
  </head>

  <body id="app">
    <app></app>
  </body>

  <script src="{{ mix('/js/app.js') }}"></script>
</html>
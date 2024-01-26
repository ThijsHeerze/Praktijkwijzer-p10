<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
  <title>Document</title>
</head>
<body class="bg-gray-100">

  <div class="grid grid-cols-2 w-1/2 p-4">
    <div id="food-results-1" class="p-4 bg-white rounded-md shadow-md">
      <label class="block text-lg font-bold mb-2" for="search1">Zoek naar voedsel:</label>
      <input type="text" name="search1" id="search1" placeholder="Zoek naar voedsel..." class="w-full border p-2 mb-2 rounded-md">
      <button id="searchButton1" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Zoeken</button>
    </div>

    <div id="food-results-2" class="p-4 bg-white rounded-md shadow-md">
      <label class="block text-lg font-bold mb-2" for="search2">Zoek naar voedsel:</label>
      <input type="text" name="search2" id="search2" placeholder="Zoek naar voedsel..." class="w-full border p-2 mb-2 rounded-md">
      <button id="searchButton2" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Zoeken</button>
    </div>
  </div>

  <button id="compareButton" disabled class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 mx-4">Vergelijk voedingsmiddelen</button>

  <div id="comparison-result" class="p-4 bg-white rounded-md shadow-md mt-4"></div>

  <script src="main.js"></script>
</body>
</html>

function generateData()
{
	var tableBody = document.querySelector("#data-table tbody");
	for (var i = 0; i < 20; i++)
	{
		var row = tableBody.insertRow(i);
		for (var j = 0; j < 5; j++)
		{
			var cell = row.insertCell(j);
			if (j == 0)
			{
				cell.textContent = getRandomNumber (-30, -50) + " C";
			}
			if (j == 1)
			{
				cell.textContent = getRandomNumber (900, 1100) + "hPa";
			}
			if (j == 2)
			{
				cell.textContent = getRandomNumber (30, 70) + "%";
			}
			if (j == 3)
			{
				cell.textContent = getRandomNumber (0, 10) + "mm";
			}
			if (j == 4)
			{
				cell.textContent = getRandomNumber(10, 100) + "km/h";
			}
		}
	}
}

function getRandomNumber(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

﻿

function downloadCSV()
{
	var csvContent = "data:text/csv;charset=utf-8,";
	var rows = document.querySelectorAll("#data-table tbody tr");
	rows.forEach(function (row)
	{
		var rowData = [];
		var cells = row.getElementsByTagName("td");	
		for (var i = 0; i < cells.length; i++)
		{
			rowData.push(cells[i].textContent);
		}
		csvContent += rowData.join(",") + "\n";
	});


	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", "data.csv");
	document.body.appendChild(link);
	link.click();
}
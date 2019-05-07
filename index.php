<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>New Page</title>
    <link href="src\myStyleSheet.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>

<script>

    let selectedSizeCasualShirt = "selectSizeCasualShirt";
    let selectedColorCasualShirt = "selectColorCasualShirt";

    function initiateGUI() {
        selectedSizeCasualShirt = $("#selectSizeCasualShirt").val();
        selectedColorCasualShirt = $("#selectColorCasualShirt").val();

        $("#selectSizeCasualShirt").change(function () {
            selectedSize = $("#selectSizeCasualShirt").val();
            console.log(selectedSize);
        });

        $("#selectColorCasualShirt").change(function () {
            selectedColor = $("#selectColorCasualShirt").val();
            console.log(selectedColor);

            if (selectedColor === "Black") {

                $("#casualShirt").attr("src", "src\\img\\men_shirt_casual_black.jpg");

            } else if (selectedColor === "White") {

                $("#casualShirt").attr("src", "src\\img\\men_shirt_casual_white.jpg");

            } else if (selectedColor === "Blue") {

                $("#casualShirt").attr("src", "src\\img\\men_shirt_casual_royalBlue.jpg");
            }
        });
    }

</script>

<body onload="initiateGUI()">
    <h1> DigiBp Morcote - elegant design 2</h1>

    <div class="clothesCatalogue" align="center" style="margin-top: 100px">

        <table>
            <tr>
                <td>
                    <img id="businessShirt" src="src\img\men_shirt_business_white.jpg"><br><br>
                    <div align="center">
                        Select your size
                        <select id="selectSizeBusinessShirt">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select><br><br>
                        <button>Add to cart</button>
                    </div>
                </td>
                <td>
                    <img id="casualShirt" src="src\img\men_shirt_casual_black.jpg"><br><br>
                    <div align="center">
                        Select your size
                        <select id="selectSizeCasualShirt">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select><br><br>
                        Select the color
                        <select id="selectColorCasualShirt">
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                        </select><br><br>
                        <button>Add to cart</button>
                    </div>
                </td>
                <td>
                    <img src="src\img\women_shirt_business_blue.jpg"><br><br>
                    <div align="center">
                        Select your size
                        <select>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select><br><br>
                        <button>Add to cart</button>
                    </div>
                </td>
                <td>
                    <img src="src\img\women_shirt_casual_caroBlackAndWhite.jpg"><br><br>
                    <div align="center">
                        Select your size
                        <select>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select><br><br>
                        <button>Add to cart</button>
                    </div>
                </td>
            </tr>

        </table>

    </div>

</body>

</html>
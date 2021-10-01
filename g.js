// angularjs 1.8 -> vuejs <-> angular 8, 9, 10
$(function() {
    //doi cho load xong website -> bat dau xu ly khoi code tai day
    $('#MyForm').submit(function() {
        //Goi khi nao? khi du lieu -> submit (day du lieu di)
        return addProduct()
    })
})

var count = 0
function addProduct() {
    // console.log('add product')
    //Thao tac du lieu
    //Thao tac voi tag -> input
    title = $('#title').val()
    description = $('#description').val()
    thumbnail = $('#thumbnail').val()
    price = $('#price').val()


    //Them noi dung text/html vao tag khong phai input
    $('#result').append(`
  			<tr>
  				<td>${++count}</td>
  				<td><img src="${thumbnail}" style="width: 100px"></td>
  				<td>${title}</td>
  				<td>${description}</td>
  				<td>${price}</td>
  			</tr>`)
    // $('#result').prepend(count++)
    // $('#result').before(count++)
    // $('#result').after(count++)

    return false
}
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
    document.getElementById('interactive');
    document.getElementById('idloading').style.visibility="hidden";
    document.getElementById('idcontent').style.display = "block";
  }
}
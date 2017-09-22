/**
 * 
 */
$(document).ready(function(){
    $('#signForm').submit(function(event) {
        // 자동 submit 되는 기능을 막음
        event.preventDefault();

        // name값을 가져오기
        // document.getElementById("id").value
        var name = $('#name').val();
        // 서버로 post 방식으로 전송
           $.post("http://httpbin.org/post",
                    { name: name},
                    function(data) {
                        //alert(data.form.name + '님 회원가입 되었습니다.');
                        var myModal = $('#myModal');
                         //console.log("이름 : "+data.form.name);
                        document.getElementById('signResult').innerHTML = data.form.name + '님 회원가입 되었습니다';
                        myModal.modal();
                    });
    });
});
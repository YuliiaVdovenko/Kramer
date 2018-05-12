
//проверка заполнены ли поля
function validate_form ( )
{
    valid = true;

    if ( document.contacts.name.value == "" ) //если пусто - то алерт, иначе - проверяем емейл и месендж
    {
        alert ( "Пожалуйста заполните поле 'Ваше имя'." );
        valid = false;
    }
    else {
        if ( document.contacts.email.value == "" ) //если пусто - то алерт, иначе - проверяем месендж и нейм
        {
            alert ( "Пожалуйста заполните поле 'E-mail'." );
            valid = false;
        }
        else if ( document.contacts.message.value == "" ) //если пусто - то алерт, иначе - отправка формы
        {
            alert ( "Пожалуйста заполните поле 'Message'." );
            valid = false;
        }
    }
    return valid;
}


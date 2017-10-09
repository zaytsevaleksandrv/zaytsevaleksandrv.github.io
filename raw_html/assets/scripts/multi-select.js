
$(document).ready(function(){
    $('select.multi-select').change(show_selected_value);
    $('.selected-value').delegate('i', 'click', delete_selected_value)
})
show_selected_value = function(){
    str = ''
    $('option:selected', this).each(function(){
        str += '<span class="selected-item">'+$(this).text() + '<i class="icon cancel-icon" data-value="'+ $(this).text()+'"></i></span>'
    });
    $(this).closest('.multi-select-body').find('.selected-value').html(str)
    $(this).closest('.multi-select-body').find('span.filter-option').text($(this).data('label'))
}
delete_selected_value = function(){
    value = $(this).data('value')
    $(this).closest('.multi-select-body').find('a').each(function(){
        if($(this).find('span').text() == value){
            $(this).click()
        }
    })
}
function rpg_show() {
  Metro.dialog.open('#rpg1');
}


function swt_show() {
  Metro.dialog.open('#swt');
}

function brq_show() {
  Metro.dialog.open('#brq1');
}

function rpg_click() {
  var id = $(this).attr('data-id');

  var el = $('#rpg'+id+" #server");
  var host = el.val();
  el.val("");
  Metro.dialog.close("#rpg"+id);

}


function brq_click() {
  var id = $(this).attr('data-id');


  var el = $('#brq'+id+" #server");
  var host = el.val();
  if (host) socket.emit('brq',{id:id,
    host:host
  });
  el.val("");
  Metro.dialog.close("#brq"+id);

}

function sw_click() {
  var id = $(this).attr('data-id');


  var el = $('#swt #server');
  var host = el.val();
  if (host) socket.emit('swt',{id:id,
    host:host
  });
  el.val("");
  Metro.dialog.close("#swt");

}

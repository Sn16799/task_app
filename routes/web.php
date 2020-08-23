<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/login', 'AuthController@login');

Route::group(['middleware'=>'auth:api'], function() {
    Route::get('/me', 'AuthController@me');
    Route::post('/logout', 'AuthController@logout');
});

Route::any('{all}', function() {
    return view('app');
})->where(['all'=>'.*']);
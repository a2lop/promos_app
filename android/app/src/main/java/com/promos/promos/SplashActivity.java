package com.promos.promos;

import android.content.Intent;
import android.graphics.Color;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.VideoView;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {

    private VideoView videoView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        System.out.println("XXXXXXXXXXXXX SplashActivity");

        /*Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
        finish();*/

        //try{
            setContentView(R.layout.launch_screen);
            videoView =  (VideoView) findViewById(R.id.videoView4);

            Uri path = Uri.parse( "android.resource://"+getPackageName()+"/"+R.raw.introvideo);
            videoView.setVideoURI(path);
            videoView.setZOrderOnTop(true);
//            videoView.setBackgroundColor(Color.TRANSPARENT);
//            videoView.start();
            videoView.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mediaPlayer) {
                    videoView.start();
                }
            });

            videoView.setOnCompletionListener(new MediaPlayer.OnCompletionListener(){
                @Override
                public void onCompletion(MediaPlayer mediaPlayer) {
                    jump();
                }


            });
        //}catch (Exception e){
        //    System.out.println("XXXXXXXXXXXXX");
        //    System.out.println(e);
        //    jump();
        //}



    }

    private void jump() {

        if(isFinishing())
            return;
        startActivity(new Intent(this,MainActivity.class));
        finish();
    }

    }

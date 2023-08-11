package com.example.motivation.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import androidx.core.content.ContextCompat
import com.example.motivation.infra.MotivationConstants
import com.example.motivation.R
import com.example.motivation.data.Mock
import com.example.motivation.infra.SecurityPreferences
import com.example.motivation.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity(), View.OnClickListener {
    private lateinit var binding: ActivityMainBinding
    private var activeCategory = MotivationConstants.ACTIVE_CATEGORY.STARS
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        //Hiding action bar in old android devices
        supportActionBar?.hide()

        //Set preferances registered
        handleUserName()
        handleImageFilter(binding.imageViewStars)

        //Setting a randon starter phrase
        generatePhrase()

        //Click Events
        binding.buttonNewFrase.setOnClickListener(this)
        binding.imageViewHappy.setOnClickListener(this)
        binding.imageViewStars.setOnClickListener(this)
        binding.imageViewSunny.setOnClickListener(this)
    }

    override fun onClick(view: View) {
        when (view.id) {
            R.id.button_new_frase -> {
            }

            R.id.imageView_stars -> {
                handleImageFilter(binding.imageViewStars)
                activeCategory = MotivationConstants.ACTIVE_CATEGORY.STARS
            }

            R.id.imageView_happy -> {
                handleImageFilter(binding.imageViewHappy)
                activeCategory = MotivationConstants.ACTIVE_CATEGORY.HAPPY
            }

            R.id.imageView_sunny -> {
                handleImageFilter(binding.imageViewSunny)
                activeCategory = MotivationConstants.ACTIVE_CATEGORY.SUNNY
            }
        }
        generatePhrase()
    }

    private fun handleUserName() {
        binding.textUserName.text =
            "Olá, ${SecurityPreferences(this).getString(MotivationConstants.KEY.USER_NAME)}!"
    }

    private fun handleImageFilter(image: ImageView) {
        val white = ContextCompat.getColor(this, R.color.white)
        resetImages()
        image.setColorFilter(white)
    }

    private fun resetImages() {
        val black = ContextCompat.getColor(this, R.color.black)
        binding.imageViewSunny.setColorFilter(black)
        binding.imageViewStars.setColorFilter(black)
        binding.imageViewHappy.setColorFilter(black)
    }

    private fun generatePhrase(){
        val mock = Mock()
        val phrase = mock.getPhrase(activeCategory)
        binding.textCenterMessage.text = phrase
    }
}
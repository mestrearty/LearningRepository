// Generated by view binder compiler. Do not edit!
package com.example.motivation.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.viewbinding.ViewBinding;
import androidx.viewbinding.ViewBindings;
import com.example.motivation.R;
import java.lang.NullPointerException;
import java.lang.Override;
import java.lang.String;

public final class ActivityMainBinding implements ViewBinding {
  @NonNull
  private final LinearLayout rootView;

  @NonNull
  public final Button buttonNewFrase;

  @NonNull
  public final ImageView imageViewHappy;

  @NonNull
  public final ImageView imageViewStars;

  @NonNull
  public final ImageView imageViewSunny;

  @NonNull
  public final RelativeLayout relativeLayoutMensagePageFather;

  @NonNull
  public final TextView textCenterMessage;

  @NonNull
  public final EditText textEmailLoggin;

  @NonNull
  public final TextView textUserName;

  private ActivityMainBinding(@NonNull LinearLayout rootView, @NonNull Button buttonNewFrase,
      @NonNull ImageView imageViewHappy, @NonNull ImageView imageViewStars,
      @NonNull ImageView imageViewSunny, @NonNull RelativeLayout relativeLayoutMensagePageFather,
      @NonNull TextView textCenterMessage, @NonNull EditText textEmailLoggin,
      @NonNull TextView textUserName) {
    this.rootView = rootView;
    this.buttonNewFrase = buttonNewFrase;
    this.imageViewHappy = imageViewHappy;
    this.imageViewStars = imageViewStars;
    this.imageViewSunny = imageViewSunny;
    this.relativeLayoutMensagePageFather = relativeLayoutMensagePageFather;
    this.textCenterMessage = textCenterMessage;
    this.textEmailLoggin = textEmailLoggin;
    this.textUserName = textUserName;
  }

  @Override
  @NonNull
  public LinearLayout getRoot() {
    return rootView;
  }

  @NonNull
  public static ActivityMainBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, null, false);
  }

  @NonNull
  public static ActivityMainBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup parent, boolean attachToParent) {
    View root = inflater.inflate(R.layout.activity_main, parent, false);
    if (attachToParent) {
      parent.addView(root);
    }
    return bind(root);
  }

  @NonNull
  public static ActivityMainBinding bind(@NonNull View rootView) {
    // The body of this method is generated in a way you would not otherwise write.
    // This is done to optimize the compiled bytecode for size and performance.
    int id;
    missingId: {
      id = R.id.button_new_frase;
      Button buttonNewFrase = ViewBindings.findChildViewById(rootView, id);
      if (buttonNewFrase == null) {
        break missingId;
      }

      id = R.id.imageView_happy;
      ImageView imageViewHappy = ViewBindings.findChildViewById(rootView, id);
      if (imageViewHappy == null) {
        break missingId;
      }

      id = R.id.imageView_stars;
      ImageView imageViewStars = ViewBindings.findChildViewById(rootView, id);
      if (imageViewStars == null) {
        break missingId;
      }

      id = R.id.imageView_sunny;
      ImageView imageViewSunny = ViewBindings.findChildViewById(rootView, id);
      if (imageViewSunny == null) {
        break missingId;
      }

      id = R.id.relative_layout_mensage_page_father;
      RelativeLayout relativeLayoutMensagePageFather = ViewBindings.findChildViewById(rootView, id);
      if (relativeLayoutMensagePageFather == null) {
        break missingId;
      }

      id = R.id.text_center_message;
      TextView textCenterMessage = ViewBindings.findChildViewById(rootView, id);
      if (textCenterMessage == null) {
        break missingId;
      }

      id = R.id.text_email_loggin;
      EditText textEmailLoggin = ViewBindings.findChildViewById(rootView, id);
      if (textEmailLoggin == null) {
        break missingId;
      }

      id = R.id.text_user_name;
      TextView textUserName = ViewBindings.findChildViewById(rootView, id);
      if (textUserName == null) {
        break missingId;
      }

      return new ActivityMainBinding((LinearLayout) rootView, buttonNewFrase, imageViewHappy,
          imageViewStars, imageViewSunny, relativeLayoutMensagePageFather, textCenterMessage,
          textEmailLoggin, textUserName);
    }
    String missingId = rootView.getResources().getResourceName(id);
    throw new NullPointerException("Missing required view with ID: ".concat(missingId));
  }
}
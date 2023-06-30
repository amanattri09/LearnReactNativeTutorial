package com.learning_react_native

import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class CalendarModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CalendarModule"
    }

    @ReactMethod
    fun createCallenderEvent(name: String, location: String , callback : Callback) {
        Log.d("Callender Module", "Create event called with name : $name and locatino:$location")
        callback.invoke("34343")
    }

}
var scriptName = "RetroModules";
var scriptVersion = 1.0;
var scriptAuthor = "tk400. but Ideas are Czecheks";

var FlyModule = moduleManager.getModule("Fly");
var sin = cos = 0;
//Blocks
BlockPos = Java.type('net.minecraft.util.BlockPos')
SlabBlock = Java.type('net.minecraft.block.BlockSlab')
SlimeBlock = Java.type('net.minecraft.block.BlockSlime')
AirBlock = Java.type('net.minecraft.block.BlockAir')
Workbench = Java.type('net.minecraft.block.BlockWorkbench')
Chest = Java.type('net.minecraft.block.BlockChest')
Furnace = Java.type('net.minecraft.block.BlockFurnace')

function CubeFloat() {//i think don't bypassing any server, but good for Vanilla,Single mode. and itz fun.
   var i =0;
   var Clicked = false;
   var SDV = 0;
   var StartPass=false;

   var Mode = value.createList("Mode", ["OldCube","ClipFly","Shitgma", "Shitgma2"],"Clip");
   var vc = value.createBoolean("StartVClip", false);
   var VClipV = value.createFloat("VClip", 2.5, 0, 5);
   var StartDelay = value.createInteger("StartHDelay", 0, 0, 15);
   var hc = value.createFloat("HClip", 2.5, 0, 5);
   var Delay = value.createInteger("DelayTicks", 5, 0, 15);
   var Timer = value.createFloat("Timer", 0.4, 0, 1);
   var NoFalling = value.createList("NoFalling", ["MotionZero", "MoveEventCanceler"],"MoveEventCanceler");

   this.addValues = function(v) {
      v.add(Mode);
      v.add(vc);
      v.add(StartDelay);
      v.add(VClipV);
      v.add(hc);
      v.add(Delay);
      v.add(Timer);
      v.add(NoFalling);
   }

	this.getName = function () {
		return "CubeFloat";
	}
	this.getDescription = function () {
		return "It was Allowed you to Flying on Fucking Cubecraft";
	}
	this.getCategory = function () {
		return "Movement";
	}

   this.onEnable = function() {
      NFPosY = mc.thePlayer.posY;
      mc.timer.timerSpeed = Timer.get();
      //Vclip
      if(vc.get()) {VClip(VClipV.get())}
   }
   this.onclickBlock = function () {
      if(Mode.get("OldCube")) {Clicked = true}
   }
   this.onMove = function (e) {
      if(NoFalling.get("MoveEventCanceler")) {e.cancelEvent()}
      if(Mode.get("ClipFly")) {
      }
   }
   this.onUpdate = function () {
      if(!StartPass) {
         if(!StartDelay.get()==0) {SDV+=1;
            if(StartDelay.get()==SDV) {HClip(hc.get()); StartPass = true}
         }else{StartPass=true}
      }
      if(NoFalling.get()) {mc.thePlayer.motionY = 0}
      switch (Mode.get()) {
         case "OldCube": //!?
            if(Clicked) {
               FlyModule.setState(true);
               Clicked = false;
            }
            break;
         case "ClipFly":
            if(StartPass) {i+=1;
               if(i==Delay.get()) {//bad coding.
                  i=0;
                  if(!mc.gameSettings.keyBindLeft.pressed && mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI)*hc.get();
                     cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI)*hc.get();
                  }
                  if(mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin((mc.thePlayer.rotationYaw-90) / 180 * Math.PI)*hc.get();
                     cos = Math.cos((mc.thePlayer.rotationYaw-90) / 180 * Math.PI)*hc.get();
                  }
                  if(!mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin((mc.thePlayer.rotationYaw+90) / 180 * Math.PI)*hc.get();
                     cos = Math.cos((mc.thePlayer.rotationYaw+90) / 180 * Math.PI)*hc.get();
                  }
                  if(!mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI)*-hc.get();
                     cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI)*-hc.get();
                  }
                  if(mc.gameSettings.keyBindLeft.pressed && mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin((mc.thePlayer.rotationYaw-45) / 180 * Math.PI)*hc.get();
                     cos = Math.cos((mc.thePlayer.rotationYaw-45) / 180 * Math.PI)*hc.get();
                  }
                  if(!mc.gameSettings.keyBindLeft.pressed && mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin((mc.thePlayer.rotationYaw+45) / 180 * Math.PI)*hc.get();
                     cos = Math.cos((mc.thePlayer.rotationYaw+45) / 180 * Math.PI)*hc.get();
                  }
                  if(mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin((mc.thePlayer.rotationYaw-135) / 180 * Math.PI)*hc.get();
                     cos = Math.cos((mc.thePlayer.rotationYaw-135) / 180 * Math.PI)*hc.get();
                  }
                  if(!mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && mc.gameSettings.keyBindBack.pressed && mc.gameSettings.keyBindRight.pressed){
                     sin = Math.sin((mc.thePlayer.rotationYaw+135) / 180 * Math.PI)*hc.get();
                     cos = Math.cos((mc.thePlayer.rotationYaw+135) / 180 * Math.PI)*hc.get();
                  }
                  if(!mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed && !mc.gameSettings.keyBindRight.pressed) {
                     sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI)*hc.get();
                     cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI)*hc.get();
                  }
                  mc.thePlayer.setPosition(mc.thePlayer.posX -=sin, mc.thePlayer.posY, mc.thePlayer.posZ+=cos);
               }
            }
            break;
         case "Shitgma":
            break;
      }
   }

   this.onDisable = function() {
      mc.timer.timerSpeed = 1;
      i=0;
      Clicked = false;
      StartPass = false;SDV=0;
      FlyModule.getState() && FlyModule.setState(false);
   }
}

function HackedTheCubeSpeed() {
   var Mode = value.createList("Mode", ["SimpleTeleport", ""], "");
   var Jump = value.createList("Jump", ["false","onGround", "OnlyEnabled", "VClip"], "false");

   this.addValues = function(v) {
      v.add(Mode)
      v.add(Jump)
   }
   this.getName = function() {
      return "CubeSpeed"
   }  
   this.getDescription = function() {
      return "it was Allowed you can get faster moving on Cubecrafted."
   }  
   this.getCategory = function() {
      return "Movement"
   }

   this.onMove = function() {
      HClip(hc.get())
   }
   this.onEnable = function() {}
   this.onDisable = function() {}
}


var CubeFloat = moduleManager.registerModule(new CubeFloat)
var HackedTheCubeSpeed = moduleManager.registerModule(new HackedTheCubeSpeed);

function onEnable() {
    CubeFloat;
    HackedTheCubeSpeed;
};

function onDisable() {
    moduleManager.unregisterModule(CubeFloat);
    moduleManager.unregisterModule(HackedTheCubeSpeed);
};

function VClip(offset) {
   mc.thePlayer.setPosition(mc.thePlayer.posX, mc.thePlayer.posY += offset, mc.thePlayer.posZ);
}
function HClip(offset) { //Recoded by tk400.
   sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI)*offset;
   cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI)*offset;
   if((mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX -sin, mc.thePlayer.posY, mc.thePlayer.posZ +cos)).getBlock() instanceof AirBlock) && (mc.theWorld.getBlockState(new BlockPos(mc.thePlayer.posX -sin, mc.thePlayer.posY +1, mc.thePlayer.posZ +cos)).getBlock() instanceof AirBlock)) {
      mc.thePlayer.setPosition(mc.thePlayer.posX -=sin, mc.thePlayer.posY, mc.thePlayer.posZ+=cos);
   }/*else {//Recalculate HClip Value
      sin = ((mc.thePlayer.posX + sin) - mc.thePlayer.posX)
      cos = ((mc.thePlayer.posZ + cos) - mc.thePlayer.posZ)
      mc.thePlayer.setPosition(mc.thePlayer.posX -=sin, mc.thePlayer.posY, mc.thePlayer.posZ+=cos);
   }*/
}
function HMotion(offset) {
   var sin = Math.sin(mc.thePlayer.rotationYaw / 180 * Math.PI)*offset;
   var cos = Math.cos(mc.thePlayer.rotationYaw / 180 * Math.PI)*offset;
   mc.thePlayer.motionX -= sin; mc.thePlayer.motionZ += cos;
}
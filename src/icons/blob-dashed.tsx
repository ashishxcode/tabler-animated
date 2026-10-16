"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.899 20.992q .498 .008 1 .008"}],["path",{"d":"M15.989 20.781q .506 -.079 .979 -.201"}],["path",{"d":"M20.249 18.312q .247 -.421 .412 -.909"}],["path",{"d":"M20.856 13.346q -.08 -.492 -.201 -.98"}],["path",{"d":"M19.07 8.603a13 13 0 0 0 -.559 -.829"}],["path",{"d":"M15.526 5.004a8 8 0 0 0 -.892 -.451"}],["path",{"d":"M10.621 4.149a7 7 0 0 0 -.958 .284"}],["path",{"d":"M6.329 6.756q -.34 .367 -.647 .762"}],["path",{"d":"M3.727 11.103q -.17 .472 -.301 .953"}],["path",{"d":"M3.057 16.115q .06 .519 .188 .982"}],["path",{"d":"M5.79 20.138l.107 .05q .446 .2 .94 .339"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9,10],"o":[11.96,12.57],"a":0.06}];

export const BlobDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlobDashedIcon.displayName = "BlobDashedIcon";

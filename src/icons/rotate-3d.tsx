"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a7 7 0 0 1 7 7v4l-3 -3"}],["path",{"d":"M22 11l-3 3"}],["path",{"d":"M8 15.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5"}],["path",{"d":"M3 12.5v5.5l5 3"}],["path",{"d":"M8 15.545l5 -3.03"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4],"o":[12.5,12],"a":360}];

export const Rotate3dIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Rotate3dIcon.displayName = "Rotate3dIcon";

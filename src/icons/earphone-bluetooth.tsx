"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6.57 12.77a6.9 6.9 0 0 1 -.57 -2.77a7 7 0 0 1 14 0"}],["path",{"d":"M9 16l-1 1"}],["path",{"d":"M10.83 19.83l6.36 -6.37a1 1 0 0 0 0 -1.41l-4.19 -4.24a1 1 0 0 0 -1.41 0l-6.42 6.36a4 4 0 0 0 0 5.66a4 4 0 0 0 5.66 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.1}];

export const EarphoneBluetoothIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EarphoneBluetoothIcon.displayName = "EarphoneBluetoothIcon";

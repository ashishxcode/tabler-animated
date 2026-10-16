"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8l10 8l-5 4l0 -16l5 4l-10 8"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"st":0.1}];

export const BluetoothIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BluetoothIcon.displayName = "BluetoothIcon";

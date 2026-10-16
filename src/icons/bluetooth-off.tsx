"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M16.438 16.45l-4.438 3.55v-8m0 -4v-4l5 4l-2.776 2.22m-2.222 1.779l-5 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"dl":0.25},{"fx":"draw","n":[1],"o":[12,12],"st":0.1}];

export const BluetoothOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BluetoothOffIcon.displayName = "BluetoothOffIcon";

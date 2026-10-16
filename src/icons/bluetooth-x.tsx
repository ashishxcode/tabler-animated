"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8l10 8l-5 4v-16l1 .802m0 6.396l-6 4.802"}],["path",{"d":"M16 6l4 4"}],["path",{"d":"M20 6l-4 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[13.5,12],"st":0.1}];

export const BluetoothXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BluetoothXIcon.displayName = "BluetoothXIcon";

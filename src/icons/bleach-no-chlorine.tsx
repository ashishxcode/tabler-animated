"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"}],["path",{"d":"M6.576 19l7.907 -13.733"}],["path",{"d":"M11.719 19.014l5.346 -9.284"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.99,10.98],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.53,12.13],[14.39,14.37]]}];

export const BleachNoChlorineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BleachNoChlorineIcon.displayName = "BleachNoChlorineIcon";

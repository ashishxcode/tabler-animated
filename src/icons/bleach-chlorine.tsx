"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"}],["path",{"d":"M11 12h-1a2 2 0 1 0 0 4h1"}],["path",{"d":"M14 12v4h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.99,10.98],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[9.5,14],[15,14]]}];

export const BleachChlorineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BleachChlorineIcon.displayName = "BleachChlorineIcon";

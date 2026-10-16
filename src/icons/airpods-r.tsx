"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 4a4 4 0 0 0 -4 3.8v10.7a1.5 1.5 0 1 0 3 0v-6.5h1a4 4 0 0 0 4 -3.8v-.2a4 4 0 0 0 -4 -4"}],["path",{"d":"M5 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[18,12],"a":0.08},{"fx":"pop","n":[1],"o":[7,12],"a":0.22,"dl":0.1}];

export const AirpodsRIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AirpodsRIcon.displayName = "AirpodsRIcon";

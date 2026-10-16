"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 4a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 1 1 -3 0v-6.5h-1a4 4 0 0 1 -4 -3.8v-.2a4 4 0 0 1 4 -4"}],["path",{"d":"M15 8v8h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[6,12],"a":0.08},{"fx":"pop","n":[1],"o":[17,12],"a":0.22,"dl":0.1}];

export const AirpodsLIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AirpodsLIcon.displayName = "AirpodsLIcon";

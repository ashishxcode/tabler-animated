"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 14l4 6h5m-2.863 -6.868l-5.137 -9.132l-1.44 2.559m-1.44 2.563l-6.12 10.878h6l4 -6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[11.5,12],"a":0.08}];

export const TentOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TentOffIcon.displayName = "TentOffIcon";

"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h1v8"}],["path",{"d":"M7 8h4l-2 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.5,12],"a":0.12}];

export const Number71SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number71SmallIcon.displayName = "Number71SmallIcon";

"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.475 15.029a9 9 0 1 0 -7.962 5.957"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const CircleMinus2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleMinus2Icon.displayName = "CircleMinus2Icon";

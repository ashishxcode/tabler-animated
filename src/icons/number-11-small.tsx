"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h1v8"}],["path",{"d":"M14 8h1v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.5,12],"a":0.12}];

export const Number11SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number11SmallIcon.displayName = "Number11SmallIcon";

"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h1v8"}],["path",{"d":"M13 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M17 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12.5,12],"a":0.12}];

export const Number14SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number14SmallIcon.displayName = "Number14SmallIcon";

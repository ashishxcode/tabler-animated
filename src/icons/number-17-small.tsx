"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h1v8"}],["path",{"d":"M13 8h4l-2 8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12.5,12],"a":0.12}];

export const Number17SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number17SmallIcon.displayName = "Number17SmallIcon";

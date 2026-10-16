"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3"}],["path",{"d":"M16 7l-1 10"}],["path",{"d":"M20 7l-1 10"}],["path",{"d":"M14 10h7.5"}],["path",{"d":"M21 14h-7.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12.25,12],"a":0.1}];

export const BrandCSharpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandCSharpIcon.displayName = "BrandCSharpIcon";

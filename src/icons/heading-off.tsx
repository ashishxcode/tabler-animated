"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12h5m4 0h1"}],["path",{"d":"M7 7v12"}],["path",{"d":"M17 5v8m0 4v2"}],["path",{"d":"M15 19h4"}],["path",{"d":"M15 5h4"}],["path",{"d":"M5 19h4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[17,19],"a":0.35,"dl":0.2},{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.07}];

export const HeadingOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeadingOffIcon.displayName = "HeadingOffIcon";

"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12h10"}],["path",{"d":"M7 5v14"}],["path",{"d":"M17 5v14"}],["path",{"d":"M15 19h4"}],["path",{"d":"M15 5h4"}],["path",{"d":"M5 19h4"}],["path",{"d":"M5 5h4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"st":0.07},{"fx":"pop","n":[1,2],"o":[12,12],"a":0.04}];

export const HeadingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HeadingIcon.displayName = "HeadingIcon";

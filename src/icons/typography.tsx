"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20l3 0"}],["path",{"d":"M14 20l7 0"}],["path",{"d":"M6.9 15l6.9 0"}],["path",{"d":"M10.2 6.3l5.8 13.7"}],["path",{"d":"M5 20l6 -16l2 0l7 16"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2,3],"o":[13.95,13.15],"st":0.07},{"fx":"pop","n":[4],"o":[12.5,12],"a":0.04}];

export const TypographyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TypographyIcon.displayName = "TypographyIcon";

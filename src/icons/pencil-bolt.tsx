"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}],["path",{"d":"M13.5 6.5l4 4"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1],"o":[11.66,12.34]}];

export const PencilBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PencilBoltIcon.displayName = "PencilBoltIcon";

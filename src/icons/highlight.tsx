"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"}],["path",{"d":"M12.5 5.5l4 4"}],["path",{"d":"M4.5 13.5l4 4"}],["path",{"d":"M21 15v4h-8l4 -4l4 0"}]];
const rig: Rig[] = [{"fx":"write","n":[0,1,2,3],"o":[12,11.34]}];

export const HighlightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HighlightIcon.displayName = "HighlightIcon";

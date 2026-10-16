"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 9l-6 6v4h4l6 -6m2 -2l2.503 -2.503a2.828 2.828 0 1 0 -4 -4l-2.497 2.497"}],["path",{"d":"M12.5 5.5l4 4"}],["path",{"d":"M4.5 13.5l4 4"}],["path",{"d":"M19 15h2v2m-2 2h-6l3 -3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[17,17],"a":0.35,"dl":0.2},{"fx":"write","n":[0,1,2],"o":[10.67,11.33]}];

export const HighlightOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HighlightOffIcon.displayName = "HighlightOffIcon";

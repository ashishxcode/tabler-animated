"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 12h4"}],["path",{"d":"M14 12h4"}],["path",{"d":"M15 7l-2 3"}],["path",{"d":"M9 7l2 3"}],["path",{"d":"M11 14l-2 3"}],["path",{"d":"M13 14l2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[12],"o":[14,15.5],"a":0.35,"dl":0.2},{"fx":"twinkle","n":[0,1,2,3,4,5,6,7,8,9,10,11],"o":[12,12]}];

export const TopologyStar3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyStar3Icon.displayName = "TopologyStar3Icon";

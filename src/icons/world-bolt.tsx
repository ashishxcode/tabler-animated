"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.985 12.52a9 9 0 1 0 -7.52 8.36"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h10.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 0 18"}],["path",{"d":"M12.5 3c2.313 3.706 3.07 7.856 2.27 12"}],["path",{"d":"M19 16l-2 3h4l-2 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[5],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"flash","n":[0,1,2,3,4],"o":[12,12]}];

export const WorldBoltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WorldBoltIcon.displayName = "WorldBoltIcon";

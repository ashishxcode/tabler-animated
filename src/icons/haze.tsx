"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h1"}],["path",{"d":"M12 3v1"}],["path",{"d":"M20 12h1"}],["path",{"d":"M5.6 5.6l.7 .7"}],["path",{"d":"M18.4 5.6l-.7 .7"}],["path",{"d":"M8 12a4 4 0 1 1 8 0"}],["path",{"d":"M3 16h18"}],["path",{"d":"M3 20h18"}]];
const rig: Rig[] = [{"fx":"pop","n":[6,7],"o":[12,18],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[3.5,12],[12,3.5],[20.5,12],[5.95,5.95],[18.05,5.95],[12,10]]}];

export const HazeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HazeIcon.displayName = "HazeIcon";

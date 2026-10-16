"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"}],["path",{"d":"M18 14v4h4"}],["path",{"d":"M18 11v-4a2 2 0 0 0 -2 -2h-2"}],["path",{"d":"M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"}],["path",{"d":"M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M8 11h4"}],["path",{"d":"M8 15h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3,4],"o":[15,12.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[1,5,6],"o":[15,14.5],"dl":0.2},{"fx":"pop","n":[0],"o":[7.85,13],"a":0.04}];

export const ReportIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReportIcon.displayName = "ReportIcon";

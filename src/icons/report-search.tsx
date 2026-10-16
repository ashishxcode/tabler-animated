"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"}],["path",{"d":"M18 12v-5a2 2 0 0 0 -2 -2h-2"}],["path",{"d":"M8 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"}],["path",{"d":"M8 11h4"}],["path",{"d":"M8 15h3"}],["path",{"d":"M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M18.5 19.5l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[5,6],"o":[17.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,2,3,4],"o":[11,12]}];

export const ReportSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ReportSearchIcon.displayName = "ReportSearchIcon";

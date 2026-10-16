"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"}],["path",{"d":"M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2"}],["path",{"d":"M11 5l-1 0"}],["path",{"d":"M13 7l-1 0"}],["path",{"d":"M11 9l-1 0"}],["path",{"d":"M13 11l-1 0"}],["path",{"d":"M11 13l-1 0"}],["path",{"d":"M13 15l-1 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[11,19.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[2,3,4,5,6,7],"o":[11.5,10],"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const FileZipIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileZipIcon.displayName = "FileZipIcon";

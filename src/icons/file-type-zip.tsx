"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"}],["path",{"d":"M16 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"}],["path",{"d":"M12 15v6"}],["path",{"d":"M5 15h3l-3 6h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2,4],"o":[12,12],"dl":0.05,"st":0.07},{"fx":"draw","n":[3],"o":[12,18],"dl":0.2},{"fx":"pop","n":[1],"o":[12,7.5],"a":0.04}];

export const FileTypeZipIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTypeZipIcon.displayName = "FileTypeZipIcon";
